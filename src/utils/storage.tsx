export const storage = {
    get(key: string) {
        if (window) {
            const notebook = JSON.parse(localStorage.getItem(key) as string);

            if (!notebook) {
                this.save({});
                return JSON.parse(localStorage.getItem("notebook") as string);
            }

            return notebook;
        }
    },

    save(data: any) {
        if (window) {
            return localStorage.setItem("notebook", JSON.stringify(data));
        }
    },
};
