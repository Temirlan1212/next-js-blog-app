import { User } from "@/entities/user";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";

export interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card
      key={user.id}
      className="shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader>
        <CardTitle className="text-lg font-bold">{user.name}</CardTitle>
        <CardDescription className="text-sm">
          {user.company.name} - {user.company.catchPhrase}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <span className="block text-sm font-medium">Email:</span>
          <span className="">{user.email}</span>
        </div>
        <div>
          <span className="block text-sm font-medium">Phone:</span>
          <span className="">{user.phone}</span>
        </div>
        <div>
          <span className="block text-sm font-medium">Website:</span>
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {user.website}
          </a>
        </div>
        <div>
          <span className="block text-sm font-medium">Address:</span>
          <span className="">
            {user.address.suite}, {user.address.street}, {user.address.city},{" "}
            {user.address.zipcode}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
