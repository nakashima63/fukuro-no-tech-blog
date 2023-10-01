import Link from "next/link";
import { Layout } from "@/components/Layouts/Layout";
import { Container } from "@/components/Containers/Container";
import { Section } from "@/components/Sections/Section";
import { Icon } from "@/components/Icons/Icon";

export default function ProfilePage() {
  return (
    <Layout>
      <Container>
        <Section title="プロフィール">
          <div className='flex justify-center pt-4'>
            <Icon />
          </div>
          <hr className="border-t border-white my-4" />
          <div className='text-white px-6 flex justify-center'>
            <p>燃えるゴミの袋</p>
          </div>
        </Section>
      </Container>
    </Layout>
  );
};