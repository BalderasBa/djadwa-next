import { FormFieldProps } from '../../../types/form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../form';
import { Checkbox, CheckboxProps } from './checkbox';

type CheckboxFieldProps = Omit<FormFieldProps, 'label'> & CheckboxProps;

const CheckboxField = ({
  control,
  name,
  description,
  label,
  ...props
}: CheckboxFieldProps) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Checkbox
              checked={!!field.value}
              onCheckedChange={field.onChange}
              label={label}
              {...props}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CheckboxField;
