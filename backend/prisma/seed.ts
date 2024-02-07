import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const data: { userPrompt: string, response: string }[] = [
    {
        userPrompt: "What is the speed of light in a vacuum?",
        response: "The speed of light in a vacuum is approximately 299,792 kilometers per second."
    },
    {
        userPrompt: "What is the atomic number of hydrogen?",
        response: "The atomic number of hydrogen is 1. It is the simplest and lightest element in the periodic table."
    },
    {
        userPrompt: "Who developed the theory of relativity?",
        response: "The theory of relativity was developed by Albert Einstein. It revolutionized our understanding of space, time, and gravity."
    }
];



const populateDb = async () => {
    await Promise.all(
        data.map(async ({ userPrompt, response }) => {
            return prisma.chat.create({
                data: { userPrompt, response }
            });
        })
    );
};

async function main() {

}

(async () => {
    await populateDb();
})();