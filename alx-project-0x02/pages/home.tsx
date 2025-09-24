import Card from "@/components/common/Card";

const Home : React.FC = () => {
    return (
        <div className="flex gap-4 p-6 bg-teal-900 min-h-screen "> 
            <Card title="Card Title 1" content="This is the content of the card" />
            <Card title="Card Title 2" content="More content goes here" />
        </div>
    )
}

export default Home;