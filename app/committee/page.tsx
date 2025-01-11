import { Box } from "@/components/ui-self/container/box";
import { Container } from "@/components/ui-self/container/container";
import { H1 } from "@/components/ui-self/heading";
import { committeesData, taskForceData } from "./committee";

export default function Page() {
  return (
    <Container>
      <Container className="w-[25rem] px-0 md:w-full">
        <H1
          id="corecommittee"
          className="scroll-mb-10 scroll-mt-20 text-center text-destructive md:scroll-mb-40 md:scroll-mt-40"
        >
          Organising Core Committee
        </H1>
        <Box>
          <H1 className="md:w-[500px]">Organising Core Committee</H1>
          <div className="flex flex-col gap-10 text-xl">
            <div className="flex flex-col ">
              <h1 className="font-bold text-secondary">
                Prof. Rajive Mohan Pant
              </h1>
              <p>Vice Chancellor & Chairman</p>
              <p>Son Beel Utsav 2024</p>
            </div>
            <div>
              <h1 className="font-bold text-secondary">
                Dr. Pradosh Kiran Nath
              </h1>
              <p>Registrar & Organising Secretary</p>
              <p>Son Beel Utsav 2024</p>
            </div>
            <div>
              <h1 className="font-bold text-secondary">
                Prof. Manabendra Dutta Choudhury
              </h1>
              <p>Director, Planning & Event Management</p>
              <p>Son Beel Utsav 2024</p>
            </div>
            <div>
              <h1 className="font-bold text-secondary">Dr. Arun Jyoti Nath</h1>
              <p>Convener</p>
              <p>Task Force</p>
              <p>Son Beel Utsav 2024</p>
            </div>
          </div>
        </Box>
      </Container>
      <Container className="w-[25rem] px-0 md:w-full">
        <H1
          id="subcommittee"
          className="scroll-mb-10 scroll-mt-20 text-center text-destructive md:scroll-mb-40 md:scroll-mt-40"
        >
          Organising Sub Committee
        </H1>
        {committeesData.map((committee, index) => (
          <Box className="items-start md:items-center" key={index}>
            <H1 className="md:w-[500px]">{committee.name}</H1>
            <div className="flex flex-col gap-10 text-xl">
              <div className="flex flex-col">
                <h1 className="font-bold text-secondary">Chairman:</h1>
                <p>{committee.chairman}</p>
              </div>

              {committee.members && (
                <div>
                  <h1 className="font-bold text-secondary">Members:</h1>
                  {committee.members.map((member, memberIndex) => (
                    <p key={memberIndex}>{member}</p>
                  ))}
                </div>
              )}
              {committee.member_convenor && (
                <div>
                  <h1 className="font-bold text-secondary">Member Convenor:</h1>
                  <p>{committee.member_convenor}</p>
                </div>
              )}
              {committee.co_convenor && (
                <div>
                  <h1 className="font-bold text-secondary">Co Convenor:</h1>
                  <p>{committee.co_convenor}</p>
                </div>
              )}
              {committee.convenor && (
                <div>
                  <h1 className="font-bold text-secondary">Convenor:</h1>
                  <p>{committee.convenor}</p>
                </div>
              )}
            </div>
          </Box>
        ))}
      </Container>
      <Container className="w-[25rem] p-0 px-0 md:w-full">
        <H1
          id="taskforce"
          className="scroll-mb-10 scroll-mt-20 text-center text-destructive md:scroll-mb-40 md:scroll-mt-40"
        >
          Task Force
        </H1>
        {taskForceData.map((taskForceMember, index) => (
          <Box className="items-start md:items-center" key={index}>
            <H1 className="md:w-[500px]">{taskForceMember.task}</H1>
            <div className="flex flex-col gap-10 text-xl">
              {taskForceMember.members && (
                <div>
                  <h1 className="font-bold text-secondary">Members:</h1>
                  {taskForceMember.members.map((member, memberIndex) => (
                    <p key={memberIndex}>{member}</p>
                  ))}
                </div>
              )}
            </div>
          </Box>
        ))}
      </Container>
    </Container>
  );
}
