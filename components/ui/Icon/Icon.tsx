import { Image, TouchableOpacity } from "react-native";
import { iconStyles, styles } from "./Icon.styles";

interface IconProps {
  name: "done" | "doubleDone" | "arrow" | "arrowBottom" | "delete";
  onPress?: () => void;
  hidden?: boolean;
}

export function Icon({ name, onPress, hidden }: IconProps) {
  const iconSource = getIconSource(name);
  const iconStyle = [
    styles.base,
    iconStyles[name as keyof typeof iconStyles] || {},
  ];

  if (hidden) {
    return null;
  }

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={iconSource} style={iconStyle} />
      </TouchableOpacity>
    );
  }

  return <Image source={iconSource} style={iconStyle} />;
}

function getIconSource(name: IconProps["name"]) {
  const icons = {
    done: require("@/assets/images/IconDone.png"),
    doubleDone: require("@/assets/images/IconDoubleDone.png"),
    arrow: require("@/assets/images/IconArrow.png"),
    arrowBottom: require("@/assets/images/IconArrowBottom.png"),
    delete: require("@/assets/images/IconDelete.png"),
  } as const;
  return icons[name];
}
