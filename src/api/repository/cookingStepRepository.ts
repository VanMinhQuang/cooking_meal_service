import CookingStep, { ICookingStep } from "../../data/models/cookingStep";

export const getAllCookingSteps = async (): Promise<ICookingStep[]> => {
    return await CookingStep.find();
};

export const getCookingStepById = async (id: string): Promise<ICookingStep[] | null> => {
    return await CookingStep.find({
        $or: [
            { stepID: { $regex: id, $options: "i" } }
          ]
    });
}
