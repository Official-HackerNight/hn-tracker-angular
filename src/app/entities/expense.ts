
export class Expense {
    id: number;
    description: string;
    dateOccurred: string;
    expenseType: string;
    isActive: boolean;

    constructor(id: number,
        description: string,
        dateOccurred: string,
        expenseType: string,
        isActive: boolean) {
            this.id = id;
            this.description = description;
            this.dateOccurred = dateOccurred;
            this.expenseType = expenseType;
            this.isActive = isActive;
    }
}
