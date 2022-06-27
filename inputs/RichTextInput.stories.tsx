import { required } from '@specfocus/view-focus.forms/forms/validate';
import { I18nProvider } from '@specfocus/view-focus.i18n/i18n/I18nContextProvider';
import { AppContext } from '@specfocus/view-focus.mui/apps/AppContext';
import { SimpleForm, type SimpleFormProps } from '@specfocus/view-focus.mui/forms/SimpleForm';
import { RichTextInput } from './RichTextInput';
import { RichTextInputToolbar } from './RichTextInputToolbar';

export default { title: 'view-focus.mui.rich-text' };

const i18nProvider: I18nProvider = {
  translate: (key: string, options: any) => options?._ ?? key,
  changeLocale: () => Promise.resolve(),
  getLocale: () => 'en',
};

export const Basic = (props: Partial<SimpleFormProps>) => (
  <AppContext i18nProvider={i18nProvider}>
    <SimpleForm
      defaultValues={{ body: 'Hello World' }}
      onSubmit={() => { }}
      {...props}
    >
      <RichTextInput label="Body" source="body" />
    </SimpleForm>
  </AppContext>
);

export const Disabled = (props: Partial<SimpleFormProps>) => (
  <AppContext i18nProvider={i18nProvider}>
    <SimpleForm
      defaultValues={{ body: 'Hello World' }}
      onSubmit={() => { }}
      {...props}
    >
      <RichTextInput label="Body" source="body" disabled />
    </SimpleForm>
  </AppContext>
);

export const Small = (props: Partial<SimpleFormProps>) => (
  <AppContext i18nProvider={i18nProvider}>
    <SimpleForm
      defaultValues={{ body: 'Hello World' }}
      onSubmit={() => { }}
      {...props}
    >
      <RichTextInput
        toolbar={<RichTextInputToolbar size="small" />}
        label="Body"
        source="body"
      />
    </SimpleForm>
  </AppContext>
);

export const Large = (props: Partial<SimpleFormProps>) => (
  <AppContext i18nProvider={i18nProvider}>
    <SimpleForm
      defaultValues={{ body: 'Hello World' }}
      onSubmit={() => { }}
      {...props}
    >
      <RichTextInput
        toolbar={<RichTextInputToolbar size="large" />}
        label="Body"
        source="body"
      />
    </SimpleForm>
  </AppContext>
);

export const FullWidth = (props: Partial<SimpleFormProps>) => (
  <AppContext i18nProvider={i18nProvider}>
    <SimpleForm
      defaultValues={{ body: 'Hello World' }}
      onSubmit={() => { }}
      {...props}
    >
      <RichTextInput
        toolbar={<RichTextInputToolbar size="large" />}
        label="Body"
        source="body"
        fullWidth
      />
    </SimpleForm>
  </AppContext>
);

export const Validation = (props: Partial<SimpleFormProps>) => (
  <AppContext i18nProvider={i18nProvider}>
    <SimpleForm onSubmit={() => { }} {...props}>
      <RichTextInput label="Body" source="body" validate={required()} />
    </SimpleForm>
  </AppContext>
);
