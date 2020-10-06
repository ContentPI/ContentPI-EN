// Dependencies
import React, { FC, ReactElement, memo } from 'react'
import { Modal, LinkButton } from 'fogg-ui'
import { redirectTo, pluralify } from 'fogg-utils'
import { useMutation } from '@apollo/client'

// Mutation
import PUBLISH_UNPUBLISH_ENTRIES_MUTATION from '@graphql/values/publishOrUnpublishEntries.mutation'

// Styles
import { StyledModal } from './Modal.styled'

interface iProps {
  isOpen: boolean
  label: string
  options: any
  onClose(): void
}

const PublishOrUnpublishEntriesModal: FC<iProps> = ({
  isOpen,
  label,
  onClose,
  options
}): ReactElement => {
  // Data
  const {
    data: { entries, action }
  } = options

  // Mutations
  const [publishOrUnpublishEntriesMutation] = useMutation(PUBLISH_UNPUBLISH_ENTRIES_MUTATION)

  // Methods
  const handleSubmit = async (): Promise<void> => {
    const variables = {
      entries,
      action
    }

    const result = await publishOrUnpublishEntriesMutation({
      variables
    })

    if (result) {
      redirectTo('_self')
    }
  }

  return (
    <Modal isOpen={isOpen} label={label} options={options} onClose={onClose}>
      <StyledModal>
        <p>
          Are you sure you want to {action}{' '}
          {pluralify('this entry', 'these entries', entries.length)}?
        </p>

        <div className="buttons">
          <LinkButton color="#6663fd" bold onClick={onClose}>
            Cancel
          </LinkButton>

          <LinkButton
            onClick={handleSubmit}
            color={action === 'publish' ? '#0eb87f' : '#ffb914'}
            bg={action === 'publish' ? '#dbfff3' : '#fff2d4'}
            bold
          >
            <>
              {action} {pluralify('Entry', 'Entries', entries.length)}
            </>
          </LinkButton>
        </div>
      </StyledModal>
    </Modal>
  )
}

export default memo(PublishOrUnpublishEntriesModal)