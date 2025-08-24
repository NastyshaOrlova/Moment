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

export const downloadWeeklyReport = async (
  daysData: DaysData,
  contentZeitgeist: string
) => {
  try {
    const reportContent = generateReportText(daysData, contentZeitgeist);
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

export const getDaysOfWeekWithDates = () => {
  const today = new Date();

  const lastSunday = new Date(today);
  lastSunday.setDate(today.getDate() - 7);

  const baseDays = [
    { name: "sunday", title: "Воскресенье RD" },
    { name: "monday", title: "Понедельник" },
    { name: "tuesday", title: "Вторник" },
    { name: "wednesday", title: "Среда" },
    { name: "thursday", title: "Четверг" },
    { name: "friday", title: "Пятница" },
    { name: "saturday", title: "Суббота" },
  ];

  return baseDays.map((day, index) => {
    const date = new Date(lastSunday);
    date.setDate(lastSunday.getDate() + index);
    return {
      ...day,
      date: date.toLocaleDateString("ru-RU"),
    };
  });
};

export const generateReportText = (
  daysData: DaysData,
  contentZeitgeist: string
): string => {
  const weekDays = getDaysOfWeekWithDates();
  let reportText = "Мой план:\n" + contentZeitgeist + "\n\n";

  weekDays.forEach((dayInfo) => {
    const dayData = daysData[dayInfo.name];

    if (dayData) {
      reportText += `${dayInfo.title}(${dayInfo.date}):\n`;

      if (dayData.moments && dayData.moments.length > 0) {
        dayData.moments.forEach((moment, index) => {
          reportText += `${index + 1}. ${moment.description}\n`;
        });
      }

      reportText += `\n`;
    }
  });

  return reportText;
};
