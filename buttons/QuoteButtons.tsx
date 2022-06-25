import FormatQuote from '@mui/icons-material/FormatQuote';
import { ToggleButton, ToggleButtonProps } from '@mui/material';
import { useTranslate } from '@specfocus/view-focus.i18n/i18n/useTranslate';
import { useEffect, useState } from 'react';
import { useTiptapEditor } from '../inputs/useTiptapEditor';

export const QuoteButtons = (props: Omit<ToggleButtonProps, 'value'>) => {
  const editor = useTiptapEditor();
  const translate = useTranslate();
  const [isActive, setIsActive] = useState(false);

  const label = translate('ra.tiptap.blockquote', {
    _: 'Blockquote',
  });

  useEffect(() => {
    const handleUpdate = () => {
      setIsActive(editor && editor.isActive('blockquote'));
    };

    if (editor) {
      editor.on('update', handleUpdate);
      editor.on('selectionUpdate', handleUpdate);
    }

    return () => {
      if (editor) {
        editor.off('update', handleUpdate);
        editor.off('selectionUpdate', handleUpdate);
      }
    };
  }, [editor]);

  return (
    <ToggleButton
      aria-label={label}
      title={label}
      {...props}
      disabled={!editor?.isEditable}
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      selected={isActive}
      value="quote"
    >
      <FormatQuote fontSize="inherit" />
    </ToggleButton>
  );
};
