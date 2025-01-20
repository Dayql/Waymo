import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  'required': 'Le champ {{ field }} est obligatoire.',
  'string': 'Le champ {{ field }} doit être une chaîne de caractères.',
  'number': 'Le champ {{ field }} doit être un nombre.',
  'number.min': 'Le champ {{ field }} doit être supérieur ou égal à {{ min }}.',
  'number.max': 'Le champ {{ field }} doit être inférieur ou égal à {{ max }}.',
  'date': 'Le champ {{ field }} doit être une date valide.',
})
