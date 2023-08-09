import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSession } from "../providers";
import { ChangeEmailScreen, ChangePasswordScreen, ChapterPreviewScreen, ForgotPasswordScreen, LoginScreen, MainScreen, OnboardingScreen, ReaderScreen, RegisterScreen, RegisterSuccessScreen, SettingsScreen, SetupAccountScreen, SetupAccountSuccessScreen } from "../screens";
import NovelDetailsScreen from "../screens/NovelDetails/NovelDetails";
import { UserSession } from "../types/auth";

const Stack = createNativeStackNavigator();

type PublicStackProps = {
    skipOnboarding: boolean;
};

function PublicStack({ skipOnboarding }: PublicStackProps) {
    const initialRouteName = skipOnboarding ? "Login" : "Onboarding";

    return (
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Onboarding' component={OnboardingScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
            <Stack.Screen name='RegisterSuccess' component={RegisterSuccessScreen} />
        </Stack.Navigator>
    )
}

type PrivateStackProps = {
    session: UserSession;
};

function PrivateStack({ session }: PrivateStackProps) {
    const initialRouteName = !session.userProfile.isAccountSetup ? "SetupAccount" : "Main";
    return (
        // <WorkshopProvider>
        // <LibraryProvider>
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SetupAccount' component={SetupAccountScreen} />
            <Stack.Screen name='Main' component={MainScreen} />
            <Stack.Screen name='NovelDetails' component={NovelDetailsScreen} />
            <Stack.Screen name='SetupAccountSuccess' component={SetupAccountSuccessScreen} />
            <Stack.Screen name='Reader' component={ReaderScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} options={{ headerShown: true, headerTitle: "Paramètres" }} />
            <Stack.Screen name='ChangeEmail' component={ChangeEmailScreen} options={{ headerShown: true, headerTitle: "Paramètres" }} />
            <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} options={{ headerShown: true, headerTitle: "Paramètres" }} />
            <Stack.Screen name='ChapterPreview' component={ChapterPreviewScreen} />
        </Stack.Navigator>
        // </LibraryProvider>
        // </WorkshopProvider>
    )
}

type RootStackNavigatorProps = {
    skipOnboarding: boolean;
}

export default function RootStackNavigator({ skipOnboarding }: RootStackNavigatorProps) {
    const { session } = useSession();

    return (
        <NavigationContainer>
            {session ? (<PrivateStack session={session} />) : (<PublicStack skipOnboarding={skipOnboarding} />)}
        </NavigationContainer>
    )
}

