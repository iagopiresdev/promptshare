export default interface FormProps {
    type: string;
    post: { prompt: string; tag: string; };
    setPost: React.Dispatch<React.SetStateAction<{ prompt: string; tag: string; }>>;
    submit: boolean;
    onSubmit?: () => void;
    handleSubmit?: (e: any) => void; // Add type to 'e'
    children?: React.ReactNode;
    className?: string;
  }
  