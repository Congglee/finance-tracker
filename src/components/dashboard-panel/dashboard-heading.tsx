interface DashboardHeadingProps {
  heading?: string;
  description?: string;
}

export default function DashboardHeading({
  heading = "Welcome Back, Conggglee 👋",
  description = "This is your Financial Overview Report",
}: DashboardHeadingProps) {
  return (
    <div className="space-y-2 py-4 border-b">
      <h2 className="text-2xl lg:text-4xl font-medium">{heading}</h2>
      <p className="text-sm lg:text-base text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
