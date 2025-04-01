import BaseButton from "./ButtonStyles";
import Timer from "./Timer";
export default function Home() {
    return (
        <div>
            Page d&apos;accueil
            <BaseButton styling="primary">Bouton</BaseButton>
            <BaseButton styling="second">Bouton</BaseButton>
            <BaseButton styling="outline">Bouton</BaseButton>
            <Timer compte={20} />
            <Timer />
        </div>
    );
}
