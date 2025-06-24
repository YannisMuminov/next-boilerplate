import AppDiagramChart from "./components/AreaDiagramChart";
import Charts from "./components/AreaChart"


export default function Home() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 mt-5">
            <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
                <Charts />
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
            <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
            <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
            <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1  2xl:col-span-2">
                <AppDiagramChart />
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
        </div>
    );
}