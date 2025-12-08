import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-heading tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg hover:shadow-primary/50 hover:shadow-xl hover:scale-105 active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/30 backdrop-blur-sm",
        secondary:
          "bg-secondary text-secondary-foreground shadow-lg hover:shadow-secondary/50 hover:shadow-xl hover:scale-105 active:scale-95",
        ghost:
          "text-foreground hover:bg-muted hover:text-primary",
        link:
          "text-primary underline-offset-4 hover:underline",
        neon:
          "relative bg-transparent border-2 border-primary text-primary overflow-hidden before:absolute before:inset-0 before:bg-primary/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 hover:shadow-[0_0_30px_hsl(185_100%_50%/0.5)] hover:text-foreground",
        "neon-magenta":
          "relative bg-transparent border-2 border-secondary text-secondary overflow-hidden before:absolute before:inset-0 before:bg-secondary/20 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300 hover:shadow-[0_0_30px_hsl(320_100%_60%/0.5)]",
        gradient:
          "bg-gradient-to-r from-primary via-accent to-secondary text-foreground font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 bg-[length:200%_100%] hover:bg-right transition-all duration-500",
        hero:
          "px-8 py-6 text-base bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-bold tracking-widest shadow-[0_0_40px_hsl(185_100%_50%/0.4)] hover:shadow-[0_0_60px_hsl(185_100%_50%/0.6)] hover:scale-105 active:scale-95",
        "hero-outline":
          "px-8 py-6 text-base border-2 border-primary/60 bg-primary/5 text-primary font-display font-bold tracking-widest backdrop-blur-md hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_40px_hsl(185_100%_50%/0.3)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
