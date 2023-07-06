import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCachedResources } from "./hooks";
import OnboardingScreen from './screens/OnboardingScreen/OnboardingScreen';
import { ThemeProvider, createTheme } from "@rneui/themed";
import { ForgotPasswordScreen, HomeScreen, LoginScreen, RegisterScreen, SetupAccountScreen, SuccessScreen } from "./screens";
import { SafeAreaView } from "react-native-safe-area-context";

const lightTheme = createTheme({
  lightColors: {
    primary: "#22A39F",
    error: "#DF2E38",
    greyOutline: "#CCCCCC",
  },
  darkColors: {
    primary: "#22A39F",
    error: "#DF2E38",
    greyOutline: "#CCCCCC",
  },
  components: {
    Text: {
      style: {
        fontFamily: "Quicksand-500"
      }
    },

    Button: {
      titleStyle: {
        fontFamily: "Quicksand-500"
      }
    }
  }
})

const Stack = createNativeStackNavigator();

export default function App() {
  const { isLoadingComplete } = useCachedResources();
  const isFirstBoot = false;
  const isAuth = true;
  const isSetup = true;

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
              isFirstBoot ? (
                <Stack.Screen name='Onboarding' component={OnboardingScreen} />
              ) : (
                <>
                  {
                    isAuth ? (
                      <>
                        {
                          isSetup ? (
                            <>
                              <Stack.Screen name='Home' component={HomeScreen} />
                            </>
                          ) : (
                            <>
                              <Stack.Screen name='SetupAccount' component={SetupAccountScreen} />
                            </>
                          )
                        }
                      </>
                    ) : (
                      <>
                        <Stack.Screen name='Login' component={LoginScreen} />
                        <Stack.Screen name='Register' component={RegisterScreen} />
                        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                        <Stack.Screen name='Success' component={SuccessScreen} />
                      </>
                    )
                  }
                </>
              )
            }
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}