export interface SettingsTabProps {
  activeTab: string;
  message: string;
  handleActiveTab: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const SettingsTab: React.FC<SettingsTabProps> = ({
  activeTab,
  handleActiveTab,
  message,
}) => {
  return (
    <div
      id={message}
      className={
        "z-10 w-full px-4 py-2 rounded-tl-lg rounded-tr-lg cursor-pointer sm:max-w-64 " +
        (activeTab == message ? "bg-green-500 text-white" : "text-gray-600")
      }
      onClick={handleActiveTab}
    >
      {message}
    </div>
  );
};

export default SettingsTab;
