export default function formBlocks(inputs: any, userDetails: { fullname: string, imageUrl: string }): any[] {
  let mentionText: string;
  if (Array.isArray(inputs.mention) && inputs.mention.length > 0) {
    mentionText = inputs.mention.map((userId) => `<@${userId}>`).join(' ');
  } else {
    mentionText = 'なし';
  }

  // Using a regular expression to find all occurrences of https URLs in the text
  const urlRegex = /https?:\/\/[^\s]+/g;
  const urls = inputs.purchaseSourceUrl ? inputs.purchaseSourceUrl.match(urlRegex) : [];
  const urlText = urls.map((url, index) => `<${url}|Link${index + 1}>`).join('\n');

  return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: ':bell:  *新しい購入依頼*  :bell:',
      },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '依頼者:',
        },
        {
          type: 'image',
          image_url: userDetails.imageUrl,
          alt_text: userDetails.fullname,
        },
        {
          type: 'mrkdwn',
          text: `${userDetails.fullname}`,
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*部門:*\n${inputs.department}`,
        },
        {
          type: 'mrkdwn',
          text: `*目的·案件名:*\n${inputs.showName}`,
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*カテゴリー:*\n${inputs.category}`,
        },
        {
          type: 'mrkdwn',
          text: `*購入物:*\n${inputs.item}`,
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*数量:*\n${inputs.amount}`,
        },
        {
          type: 'mrkdwn',
          text: `*金額（合計税込）:*\n${inputs.price}`,
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: inputs.approvedBy ? `*承認者:*\n<@${inputs.approvedBy}>` : '*承認者:*\nなし',
        },
        {
          type: 'mrkdwn',
          text: `*購入希望時期:*\n${inputs.deliveryDate}`,
        },
      ],
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*メンション:*\n${mentionText}`,
        },
      ],
    },
    { type: 'divider' },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: inputs.comment ? `*備考:*\n${inputs.comment}` : '*備考:*\nなし',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*購入担当:*\n<@${inputs.purchaseBy}>`,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: urls.length > 0 ? `*URLs:*\n${urlText}` : '*URLs:*\nなし',
        },
      ],
    },
    { type: 'divider' },
  ];
}
