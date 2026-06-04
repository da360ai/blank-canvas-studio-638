import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import InlineLeadForm from "@/components/da360/InlineLeadForm";

interface LeadFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ctaLabel?: string;
}

const LeadFormDialog = ({ open, onOpenChange, ctaLabel = "Book Free Class" }: LeadFormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[460px] bg-transparent border-0 p-0 shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{ctaLabel}</DialogTitle>
          <DialogDescription>
            Fill in your details and our counsellor will reach out within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <InlineLeadForm
          heading={ctaLabel}
          subheading="Our counsellor will reach out within 24 hours."
          submitLabel={ctaLabel}
        />
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormDialog;
