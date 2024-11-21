export default interface UserProps {
    userData: {
        username: string
    };
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>
    setUserData: {
        setUsername: React.Dispatch<React.SetStateAction<string>>;
    }
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode: boolean;
}