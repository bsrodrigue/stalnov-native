import { Novel } from "..";

export type RootStackParamList = {
    Home;
    Onboarding;
    Login;
    Register;
    ForgotPassword;
    SetupAccount;
    Discover;
    Main;
    Novelty;
    Genre;
    Library;
    Workshop;
    Publications;
    Chapters;
    NovelWorkshop;
    ChapterWorkshop;
    NovelForm: {
        mode: "create" | "edit",
        novel?: Novel;
    };
    NovelDetails: {
        novel: Novel;
    };
    Success: {
        title: string;
        subtitle: string;
        confirm: string;
        destination: "Login" | "SetupAccount" | "Home";
    };
};