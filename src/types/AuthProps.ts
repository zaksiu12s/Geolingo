export default interface AuthProps {
    setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    username: string;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
