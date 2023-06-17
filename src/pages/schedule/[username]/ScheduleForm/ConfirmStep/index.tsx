import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const confirmFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome precisa no mínimo 3 caracteres!' }),
  email: z.string().email({ message: 'Digite um E-mail válido!' }),
  observation: z.string().nullable(),
})

type ConfirmaFormData = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmaFormData>({
    resolver: zodResolver(confirmFormSchema),
  })
  function handleConfirmScheduling(data: ConfirmaFormData) {
    console.log(data)
  }
  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          02 de Junho de 2023
        </Text>
        <Text>
          <Clock />
          20:00H
        </Text>
      </FormHeader>
      <label>
        <Text size="sm">Nome Completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>
      <label>
        <Text size="sm">E-mail</Text>
        <TextInput
          type="email"
          placeholder="Seu E-mail"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>
      <label>
        <Text size="sm">ObservaçÓes</Text>
        <TextArea {...register('observation')} />
        {errors.observation && (
          <FormError>{errors.observation.message}</FormError>
        )}
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
