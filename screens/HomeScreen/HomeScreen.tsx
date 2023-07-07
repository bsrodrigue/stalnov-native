import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet } from "react-native";
import { LatestReadCard, RecommendationCarousel, StoryRecommendation } from "../../components";
import { RootStackParamList } from "../../types";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 10
    },
});

const description = "Il s’agit d’une histoire vraiment et franchement historique. Rien de plus vrai que l’histoire de l’histoire de vos meilleures histoires historiques. J’avais juste la flemme d’utiliser un lorem ipsum, ironique..."

const novels = [
    {
        title: "La grande aventure - Tome 1",
        description,
        chapterCount: 26,
        imgSrc: require("../../assets/images/dragon.jpg"),
    }, {
        title: "La grande aventure - Tome 2",
        description,
        chapterCount: 26,
        imgSrc: require("../../assets/images/lizard.jpg"),
    }, {
        title: "La grande aventure - Tome 3",
        description,
        chapterCount: 26,
        imgSrc: require("../../assets/images/traditional.jpg"),
    }, {
        title: "La grande aventure - Tome 4",
        description,
        chapterCount: 26,
        imgSrc: require("../../assets/images/action.jpg"),
    }, {
        title: "La grande aventure - Tome 5",
        description,
        chapterCount: 26,
        imgSrc: require("../../assets/images/fantasy.jpg"),
    },
];



type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {

    return (
        <ScrollView style={styles.container}>
            <LatestReadCard title="Dernière lecture" time="Il y a trois (3) jours" novel={novels[1]} />
            <StoryRecommendation title="Le jardin des plaisirs" subtitle="Laissez-vous charmer par les rondeurs de Sophia" novel={{ title: "", description: "", mature: true, chapterCount: 35, imgSrc: require("../../assets/images/noice_butt.jpg") }} />
            <RecommendationCarousel title="Les histoires les plus populaires" novels={novels} />
            <StoryRecommendation title="Les totems des anciens" subtitle="Renouez avec vos racines" novel={{ title: "", description: "", mature: false, chapterCount: 35, imgSrc: require("../../assets/images/traditional.jpg") }} />
        </ScrollView>
    )
}