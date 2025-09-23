import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-[var(--transition-samsung)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-card-hover)] transform hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[var(--shadow-card)]",
        outline: "border-2 border-primary/20 bg-card text-primary hover:bg-primary hover:text-primary-foreground shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-card)] backdrop-blur-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transform hover:-translate-y-0.5",
        ghost: "hover:bg-accent/10 hover:text-accent transition-[var(--transition-samsung)] rounded-lg",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        hero: "bg-gradient-to-r from-primary via-accent to-primary bg-size-200 hover:bg-pos-100 text-white shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-elevated)] transform hover:scale-105 transition-[var(--transition-bounce)] rounded-2xl font-bold",
        samsung: "bg-gradient-to-br from-card to-muted text-card-foreground border border-border/50 hover:border-primary/30 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] backdrop-blur-md transform hover:-translate-y-1 transition-[var(--transition-samsung)]",
        glass: "bg-[var(--gradient-glass)] text-foreground border border-white/20 hover:border-primary/30 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] backdrop-blur-xl transform hover:-translate-y-0.5",
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
