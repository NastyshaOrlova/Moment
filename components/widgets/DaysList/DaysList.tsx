import { View } from "react-native";
import { DayItem } from "../DayItem";
import { styles } from "./DaysList.style";

interface DaysListProps {
  completedDays: string[];
  onDayComplete: (dayName: string) => void;
}

const daysOfWeek = [
  { name: "monday", title: "Понедельник" },
  { name: "tuesday", title: "Вторник" },
  { name: "wednesday", title: "Среда" },
  { name: "thursday", title: "Четверг" },
  { name: "friday", title: "Пятница" },
  { name: "saturday", title: "Суббота" },
  { name: "sunday", title: "Воскресенье" },
];

export function DaysList({ completedDays, onDayComplete }: DaysListProps) {
  return (
    <View style={styles.container}>
      {daysOfWeek.map((day) => (
        <DayItem
          key={day.name}
          dayName={day.name}
          title={day.title}
          isCompleted={completedDays.includes(day.name)}
          onComplete={onDayComplete}
        />
      ))}
    </View>
  );
}
