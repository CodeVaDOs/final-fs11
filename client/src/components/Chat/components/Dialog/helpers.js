// import dayjs from "dayjs";

export const normalizeDialog = (dialog) => {
  const newDialog = [];

  dialog.forEach((item, i) => {
    if (i === 0 || dialog[i - 1]) {
      newDialog.push({
        type: "title",
        id: `item-title-${item.id}`,
        date: item.date,
      });
    }

    if (i === 0 || item.is !== dialog[i - 1].is) {

      newDialog.push({
        type: "message",
        id: `item-message-${item.id}`,
        avatar: item.avatar,
        isReverse: item.is === "my",
        isRemovable: item.is === "my",
        messages: [
          {
            text: item.message,
            status: item.status,
            id: item.id,
            date: item.date,
          },
        ],
      });


    } else {
      const position = newDialog.length - 1;

      newDialog[position] = {
        ...newDialog[position],
        messages: newDialog[position].messages.concat({
          text: item.message,
          status: item.status,
          id: item.id,
          date: item.date,
        }),
      };
    }
  });

  return newDialog;
};