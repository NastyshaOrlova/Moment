import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Alert } from "react-native";

interface Moment {
  id: string;
  description: string;
}

interface DaysData {
  [dayName: string]: {
    moments: Moment[];
  };
}

export const downloadWeeklyReport = async (daysData: DaysData) => {
  try {
    const reportContent = generateReportText(daysData);
    const fileName = `weekly_report.txt`;
    const fileUri = FileSystem.documentDirectory + fileName;

    await FileSystem.writeAsStringAsync(fileUri, reportContent, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri, {
        mimeType: "text/plain",
        dialogTitle: "Сохранить отчет недели",
      });
    }
  } catch (error) {
    Alert.alert(`Ошибка: ${error}`, "Не удалось создать отчет");
  }
};

export const generateReportText = (daysData: DaysData): string => {
  const dayTranslations: { [key: string]: string } = {
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    sunday: "Воскресенье",
  };

  let reportText = `Создан: ${new Date().toLocaleDateString()}\n`;
  reportText += `Отчет за неделю:\n`;

  Object.entries(daysData).forEach(([dayName, dayData]) => {
    const russianDayName = dayTranslations[dayName] || dayName;
    reportText += `${russianDayName}:\n`;

    if (dayData.moments && dayData.moments.length > 0) {
      dayData.moments.forEach((moment, index) => {
        reportText += `${index + 1}. ${moment.description}\n`;
      });
    }

    reportText += `\n`;
  });

  return reportText;
};
