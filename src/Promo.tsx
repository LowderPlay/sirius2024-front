import Human1 from "./assets/graphics/human1.svg";
import Human2 from "./assets/graphics/human2.svg";
import Human3 from "./assets/graphics/human3.svg";
import HumanSmall from "./assets/graphics/human_sm.svg";

export function Promo() {
    return <div className="flex flex-row justify-between items-center
                            md:bg-transparent md:bg-none bg-backgroundAccent bg-promo bg-no-repeat bg-cover
                            shadow-[0_0_10px_3px_#79797926] rounded-3xl overflow-hidden my-10 p-5 md:py-10 md:px-16">
        <div className="flex flex-col items-start w-1/2 md:w-1/3 gap-y-3">
            <h1 className="font-extrabold text-xl">Узнай какое занятие подойдет вашему ребёнку</h1>
            <button className="md:block hidden bg-accent text-veryLightGrey px-20 py-4 rounded-3xl">Узнать</button>
        </div>
        <div className="md:flex flex-row hidden">
            <img src={Human1} alt="человек с подзорной трубой"/>
            <img src={Human2} alt="человек с подзорной трубой"/>
            <img src={Human3} alt="человек с подзорной трубой"/>
        </div>
        <div className="md:hidden block -mb-5 place-self-end">
            <img src={HumanSmall} alt="человек с подзорной трубой"/>
        </div>
    </div>;
}