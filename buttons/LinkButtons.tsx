import InsertLink from '@mui/icons-material/InsertLink';
import { ToggleButton, ToggleButtonProps } from '@mui/material';
import { useTranslate } from '@specfocus/view-focus.i18n/translations/useTranslate';
import { useTiptapEditor } from '../inputs/useTiptapEditor';
import { useEditorSelection } from './useEditorSelection';

export const LinkButtons = (props: Omit<ToggleButtonProps, 'value'>) => {
  const editor = useTiptapEditor();
  const translate = useTranslate();
  const currentTextSelection = useEditorSelection();

  const label = translate('tiptap.link', {
    _: 'Add a link',
  });

  const handleClick = () => {
    if (!editor.can().setLink({ href: '' })) {
      return;
    }

    const url = window.prompt('URL');

    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run();
  };

  return (
    <ToggleButton
      aria-label={label}
      title={label}
      {...props}
      disabled={!editor?.isEditable || !currentTextSelection}
      value="link"
      onClick={handleClick}
      selected={editor && editor.isActive('link')}
    >
      <InsertLink fontSize="inherit" />
    </ToggleButton>
  );
};
