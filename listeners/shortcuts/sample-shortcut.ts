import { AllMiddlewareArgs, SlackShortcutMiddlewareArgs } from '@slack/bolt';

const sampleShortcutCallback = async ({ shortcut, ack, client }:
  AllMiddlewareArgs & SlackShortcutMiddlewareArgs) => {
  try {
    const { trigger_id } = shortcut;

    await ack();
    await client.views.open({
      trigger_id,
      view: {
        type: 'modal',
        title: {
          type: 'plain_text',
          text: '購入依頼',
          emoji: true,
        },
        submit: {
          type: 'plain_text',
          text: '送信',
          emoji: true,
        },
        close: {
          type: 'plain_text',
          text: 'キャンセル',
          emoji: true,
        },
        blocks: [
          {
            type: 'section',
            block_id: 'department_block_id',
            text: {
              type: 'mrkdwn',
              text: '*部門*',
            },
            accessory: {
              type: 'static_select',
              action_id: 'department',
              initial_option: {
                text: {
                  type: 'plain_text',
                  text: 'VFX',
                },
                value: 'VFX',
              },
              options: [
                {
                  text: {
                    type: 'plain_text',
                    text: 'VFX',
                  },
                  value: 'VFX',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Grading',
                  },
                  value: 'Grading',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Edit',
                  },
                  value: 'Edit',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Direction',
                  },
                  value: 'Direction',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Shooting',
                  },
                  value: 'Shooting',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Animation',
                  },
                  value: 'Animation',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'System',
                  },
                  value: 'System',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Corporate',
                  },
                  value: 'Corporate',
                },
              ],
            },
          },
          {
            type: 'input',
            block_id: 'showName_block_id',
            label: {
              type: 'plain_text',
              text: '目的・案件名',
            },
            element: {
              type: 'plain_text_input',
              action_id: 'showName',
            },
          },
          {
            type: 'divider',
          },
          {
            type: 'section',
            block_id: 'category_block_id',
            text: {
              type: 'mrkdwn',
              text: '*カテゴリー*',
            },
            accessory: {
              type: 'static_select',
              action_id: 'department',
              initial_option: {
                text: {
                  type: 'plain_text',
                  text: 'VFX',
                },
                value: 'VFX',
              },
              options: [
                {
                  text: {
                    type: 'plain_text',
                    text: 'VFX',
                  },
                  value: 'VFX',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Grading',
                  },
                  value: 'Grading',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Edit',
                  },
                  value: 'Edit',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Direction',
                  },
                  value: 'Direction',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Shooting',
                  },
                  value: 'Shooting',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Animation',
                  },
                  value: 'Animation',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'System',
                  },
                  value: 'System',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: 'Corporate',
                  },
                  value: 'Corporate',
                },
              ],
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '*購入希望時期*',
            },
            accessory: {
              type: 'static_select',
              placeholder: {
                type: 'plain_text',
                text: 'Select an item',
                emoji: true,
              },
              options: [
                {
                  text: {
                    type: 'plain_text',
                    text: '*plain_text option 0*',
                    emoji: true,
                  },
                  value: 'value-0',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: '*plain_text option 1*',
                    emoji: true,
                  },
                  value: 'value-1',
                },
                {
                  text: {
                    type: 'plain_text',
                    text: '*plain_text option 2*',
                    emoji: true,
                  },
                  value: 'value-2',
                },
              ],
              action_id: 'static_select-action',
            },
          },
          {
            type: 'input',
            element: {
              type: 'plain_text_input',
              action_id: 'plain_text_input-action',
            },
            label: {
              type: 'plain_text',
              text: '購入物',
              emoji: true,
            },
          },
          {
            type: 'input',
            element: {
              type: 'number_input',
              is_decimal_allowed: false,
              action_id: 'number_input-action',
              initial_value: '1',
            },
            label: {
              type: 'plain_text',
              text: '数量',
              emoji: true,
            },
          },
          {
            type: 'input',
            element: {
              type: 'plain_text_input',
              action_id: 'plain_text_input-action',
            },
            label: {
              type: 'plain_text',
              text: '金額（合計税込）',
              emoji: true,
            },
          },
          {
            type: 'input',
            element: {
              type: 'url_text_input',
              action_id: 'url_text_input-action',
            },
            label: {
              type: 'plain_text',
              text: '購入先のURL',
              emoji: true,
            },
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export default sampleShortcutCallback;
