import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-[var(--transition-government)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-card-hover)] transform hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[var(--shadow-card)]",
        outline: "border-2 border-primary/20 bg-card text-primary hover:bg-primary hover:text-primary-foreground shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-card)] backdrop-blur-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transform hover:-translate-y-0.5",
        ghost: "hover:bg-accent/10 hover:text-accent transition-[var(--transition-government)] rounded-lg",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        hero: "bg-gradient-to-r from-primary to-success text-white hover:from-primary-hover hover:to-success/90 shadow-[var(--shadow-government)] font-medium",
        glass: "bg-[var(--gradient-glass)] backdrop-blur-md text-primary border border-primary/30 hover:border-primary/50 shadow-[var(--shadow-card)]",
        government: "bg-gradient-to-r from-secondary to-primary text-white hover:from-secondary-hover hover:to-primary-hover shadow-[var(--shadow-government)] border border-white/20",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base font-bold",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
