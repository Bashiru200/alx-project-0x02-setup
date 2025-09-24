import Card from "@/components/common/Card";
import { type CardProps } from "@/components/common/Card";

const Home : React.FC = () => {
    const cards: CardProps[] = [ 
        { title:"Card Title 1", content:"This is the content of the card" },
        { title:"Card Title 2", content:"More content goes here"}
    ]
    return (
        <div className="flex gap-4 p-6 bg-teal-900 min-h-screen "> 
           {cards.map((c, i) => (
           <Card key={i} {...c} />
           ))}
        </div>
    )
}

export default Home;