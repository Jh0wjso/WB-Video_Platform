import HotTopicComponent from "../../components/HotTopic/HotTopic";
import LastNews from "../../components/LastNews/LastNews";
import SidebarNews from "../../components/SideBarNews/SideBarNews";

export default function News() {
  return (
    <div className="flex w-full justify-between flex-1 min-h-screen">
      <SidebarNews />
      <div className="min-h-screen flex flex-col container justify-center">
        <HotTopicComponent />
        <LastNews />
      </div>
    </div>
  );
}
