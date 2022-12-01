import "./styles.css";

export default function Sidebar(){
    return(
        <aside className="sidebar w-[15%] h-[75vh] bg-zinc-900 p-6 border-l border-gray-600 my-[15vh]">
            <span className="font-bold text-center text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Novidades
            </span>

            <div className="flex flex-col gap-8">
                <p>Exemplo</p>
            </div>
        </aside>
    );
}