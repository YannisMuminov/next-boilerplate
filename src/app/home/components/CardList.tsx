import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const popularContent = [
  {
    id: 1,
    title: "JavaScript",
    badge: "Coding",
    description:
      "Learn the basics of JavaScript, the most popular programming language for web development.",
    image:
      "https://avatars.mds.yandex.net/i?id=5b9dba0e4cdf4b8331eb65264d73f85370be1c0a-5222192-images-thumbs&n=13",
    count: 4300,
  },
  {
    id: 2,
    title: "React",
    badge: "Coding",
    description:
      "Learn the basics of React, a popular JavaScript library for building user interfaces.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    count: 3200,
  },
  {
    id: 3,
    title: "Python",
    badge: "Coding",
    description:
      "Learn the basics of Python, a popular programming language for web development.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    count: 2300,
  },
  {
    id: 4,
    title: "Java",
    badge: "Coding",
    description:
      "Learn the basics of Java, a popular programming language for web development.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    count: 1300,
  },
  {
    id: 5,
    title: "C++",
    badge: "Coding",
    description:
      "Learn the basics of C++, a popular programming language for web development.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    count: 5300,
  },
  {
    id: 6,
    title: "Ruby",
    badge: "Coding",
    description:
      "Learn the basics of Ruby, a popular programming language for web development.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    count: 4200,
  },
];

const laterTransactions = [
  {
    id: 1,
    title: "Payment",
    badge: "Finance",
    description: "Description of transaction 1",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    count: 1200,
  },
  {
    id: 2,
    title: "Invoice Payment",
    badge: "Finance",
    description: "Description of transaction 2",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    count: 2300,
  },
  {
    id: 3,
    title: "Salary Payment",
    badge: "Finance",
    description: "Description of transaction 3",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    count: 3300,
  },
  {
    id: 4,
    title: "Shipping Payment",
    badge: "Finance",
    description: "Description of transaction 4",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    count: 4300,
  },
  {
    id: 5,
    title: "Refund Payment",
    badge: "Finance",
    description: "Description of transaction 5",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    count: 5400,
  },
];

export const CardList = ({ title }: { title: string }) => {
  const list = title === "Popular Content" ? popularContent : laterTransactions;
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between p-4 gap-1"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={48}
              height={48}
              className="rounded-md"
            />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
            </CardContent>
            <CardFooter>{item.count / 1000}К</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
