export default interface UserProps {
    username: string;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}