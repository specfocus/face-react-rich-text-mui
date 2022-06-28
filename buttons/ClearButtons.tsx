import FormatClear from '@mui/icons-material/FormatClear';
import { ToggleButton, ToggleButtonProps } from '@mui/material';
import { useTranslate } from '@specfocus/view-focus.i18n/translations/useTranslate';
import { useTiptapEditor } from '../inputs/useTiptapEditor';

export const ClearButtons = (props: Omit<ToggleButtonProps, 'value'>) => {
  const editor = useTiptapEditor();
  const translate = useTranslate();

  const label = translate('ra.tiptap.clear_format', {
    _: 'Clear format',
  });

  return (
    <ToggleButton
      aria-label={label}
      title={label}
      {...props}
      disabled={!editor?.isEditable}
      value="clear"
      onClick={() => editor.chain().focus().unsetAllMarks().run()}
    >
      <FormatClear fontSize="inherit" />
    </ToggleButton>
  );
};
