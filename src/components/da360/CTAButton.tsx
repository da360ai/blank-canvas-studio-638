import { useState } from "react";
import { cn } from "@/lib/utils";
import LeadFormDialog from "@/components/da360/LeadFormDialog";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  formLabel?: string;
  noForm?: boolean;
  noShadow?: boolean;
}

const CTAButton = ({ variant = "primary", children, className, fullWidth, formLabel, noForm = false, noShadow = false, onClick, ...props }: CTAButtonProps) => {
  const [open, setOpen] = useState(false);
  const isPrimary = variant === "primary";

  const childText = typeof children === "string" ? children : undefined;
  const label = formLabel || childText || "Book Free Class";

  const shouldOpenForm = !noForm;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldOpenForm) {
      setOpen(true);
    }
    onClick?.(e);
  };

  return (
    <>
      <div className={cn("relative inline-block", fullWidth && "w-full")}>
        {!noShadow && (
          <div
            className={cn(
              "absolute inset-0 rounded-full translate-y-1",
              "bg-foreground"
            )}
          />
        )}
        <button
          type={shouldOpenForm ? "button" : props.type}
          className={cn(
            "relative rounded-full font-heading font-bold text-base px-8 py-4 transition-all duration-200 hover:translate-y-0.5 hover:bg-white hover:text-foreground",
            isPrimary
              ? "bg-primary text-primary-foreground border-2 border-foreground"
              : "bg-background text-foreground border-2 border-foreground",
            fullWidth && "w-full",
            className
          )}
          onClick={handleClick}
          {...props}
        >
          {children}
        </button>
      </div>
      {shouldOpenForm && (
        <LeadFormDialog open={open} onOpenChange={setOpen} ctaLabel={label} />
      )}
    </>
  );
};

export default CTAButton;
