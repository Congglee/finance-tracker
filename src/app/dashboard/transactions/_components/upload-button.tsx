import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface UploadButtonProps {
  onUpload: (results: any) => void;
}

export default function UploadButton({ onUpload }: UploadButtonProps) {
  return (
    <Button size="sm" className="w-full lg:w-auto bg-[#1E88E5]">
      <Upload className="size-4 mr-2" />
      Import
    </Button>
  );
}
