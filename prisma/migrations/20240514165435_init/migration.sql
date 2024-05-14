-- CreateTable
CREATE TABLE "Gamer" (
    "id" SERIAL NOT NULL,
    "user_ip" TEXT NOT NULL,
    "game_status" BOOLEAN NOT NULL,

    CONSTRAINT "Gamer_pkey" PRIMARY KEY ("id")
);
