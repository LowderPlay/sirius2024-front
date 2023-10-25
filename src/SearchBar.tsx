import Search from "./assets/search.svg";

export function SearchBar() {
    return <div className="flex rounded-3xl overflow-hidden">
        <div className="bg-veryLightGrey grow flex">
            <img className="pl-4" src={Search} alt="Поиск"/>
            <input className="grow bg-veryLightGrey p-4 placeholder-darkGrey outline-none"
                   placeholder="Введите название секции или кружка"/>
        </div>
        <button className="md:block hidden bg-accent text-veryLightGrey px-20">Найти</button>
    </div>;
}