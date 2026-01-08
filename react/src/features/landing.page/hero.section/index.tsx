import Logo from "./logo";
import Links from "./links";
import Description from "./description";
import View from "@/components/view";
import Platforms from "./platforms";

export default function () {
  return (
    <View className="flex flex-row gap-5 h-full">
      {/* Left */}
      <View className="flex flex-2 flex-col gap-5">
        {/*  */}
        <View className="flex gap-5">
          <Logo />
          <Links />
        </View>
        {/*  */}
        <Description />
      </View>
      {/* Right */}
      <Platforms />
    </View>
  );
}
