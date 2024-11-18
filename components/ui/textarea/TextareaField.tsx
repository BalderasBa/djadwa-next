import { FormFieldProps } from '../../../types/form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form';
import { Textarea, TextareaProps } from './textarea';

type TextareaFieldProps = FormFieldProps & TextareaProps;

const TextareaField = ({
  control,
  name,
  label,
  description,
}: TextareaFieldProps) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Textarea {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextareaField;
