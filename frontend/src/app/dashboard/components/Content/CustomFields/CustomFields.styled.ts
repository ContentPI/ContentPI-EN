import { styled } from '@styles/theme'

export const StyledCustomFields = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: -20px;
  padding-left: 20px;
  width: 100%;

  .id {
    display: inline-block;
    background-color: ${props => props.theme.colors.gray.gallery};
    color: ${props => props.theme.color.gray};
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-radius: 3px;
    padding: 5px 6px;
  }

  .fields {
    font-size: 13px;
    line-height: 24px;
    color: ${props => props.theme.colors.gray.regentGray};
    width: 100%;
    max-width: 800px;
    margin-top: 20px;

    ${props => props.theme.mixins.breakpoint.md`
      max-width: 600px;
    `};

    ${props => props.theme.mixins.breakpoint.sm`
      max-width: 420px;
    `};

    .badge {
      padding: 6px;
      margin-right: 10px;
    }

    .goBack {
      display: flex;
      align-items: center;
      color: ${props => props.theme.colors.gray.tuna};
      font-size: 24px;
      margin-bottom: 40px;

      a {
        color: ${props => props.theme.colors.gray.tuna};
      }
    }

    .entryTitle {
      word-wrap: break-word;
      width: 550px;

      ${props => props.theme.mixins.breakpoint.sm`
        width: 300px;
      `};
    }

    .field {
      border-left: 3px solid ${props => props.theme.colors.gray.gallery};
      padding-left: 10px;
      margin-top: 10px;

      .entries {
        margin-top: 5px;

        .reference {
          color: ${props => props.theme.colors.purple.electricViolet};
          cursor: pointer;
        }
      }

      &.active {
        border-left: 3px solid ${props => props.theme.colors.blue.pictonBlue};
      }

      &.red {
        border-left: 3px solid ${props => props.theme.color.red};
      }

      label {
        width: 100%;

        .tag {
          background-color: ${props => props.theme.colors.gray.alabaster};
          border-radius: 5px;
          color: ${props => props.theme.colors.gray.tuna};
          font-size: 12px;
          margin-right: 5px;
          padding: 5px;
          text-align: center;
          width: 40px;
        }

        .red {
          color: ${props => props.theme.color.red};
          background-color: ${props => props.theme.colors.pink.fairPink};
        }
      }

      .text {
        textarea {
          height: 250px;
        }
      }
    }
  }
`