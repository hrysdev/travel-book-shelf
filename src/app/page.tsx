import Header from "@/components/header";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import {
  Container,
  VStack,
  Stack,
  Flex,
  Card,
  For,
  Image,
  List,
  Link,
  Text,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { SiRakuten } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";

export default function Home() {
  const items = [
    {
      title: "完本 東京発 半日徒歩旅行",
      author: "佐藤 徹也",
      publisherName: "山と溪谷社",
      itemCaption:
        "朝寝した休日でもたっぷり楽しめる東京近郊＜超＞小さな旅。元祖・半日徒歩旅行ガイドの決定版！ 全100コース収録！大ヒット『ヤマケイ新書　東京発 半日徒歩旅行』がパワーアップして帰ってくる！地形を体感する、時代を感じる、不思議を探る、島へ渡る、乗り物も楽しむ、旧道・旧線を辿るなどなど知的好奇心を刺激する10テーマをもって関東平野を中心に歩き倒した全100コース!!東京近郊の多様な魅力に気づく、安近短の徒歩旅行ガイドの決定的保存版。寝坊した休日もこれで大充実の旅を満喫できること間違いなし！■内容まえがき第1章 時代を感じる徒歩旅行第2章 乗り物も楽しむ徒歩旅行第3章 自然と里山を満喫する徒歩旅行第4章 地形を体感する徒歩旅行第5章 旧道旧線を辿る徒歩旅行第6章 街を漂う徒歩旅行第7章 不思議を探る徒歩旅行第8章 水辺に沿って徒歩旅行第9章 島へ渡る徒歩旅行第10章 唯一の「村」の徒歩旅行あとがき探訪地マップ",
      affiliateUrl: "path",
      imageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0851/9784635510851_1_3.jpg?_ex=200x200",
    },
    {
      title: "完本 東京発 半日徒歩旅行",
      author: "佐藤 徹也",
      publisherName: "山と溪谷社",
      itemCaption:
        "朝寝した休日でもたっぷり楽しめる東京近郊＜超＞小さな旅。元祖・半日徒歩旅行ガイドの決定版！ 全100コース収録！大ヒット『ヤマケイ新書　東京発 半日徒歩旅行』がパワーアップして帰ってくる！地形を体感する、時代を感じる、不思議を探る、島へ渡る、乗り物も楽しむ、旧道・旧線を辿るなどなど知的好奇心を刺激する10テーマをもって関東平野を中心に歩き倒した全100コース!!東京近郊の多様な魅力に気づく、安近短の徒歩旅行ガイドの決定的保存版。寝坊した休日もこれで大充実の旅を満喫できること間違いなし！■内容まえがき第1章 時代を感じる徒歩旅行第2章 乗り物も楽しむ徒歩旅行第3章 自然と里山を満喫する徒歩旅行第4章 地形を体感する徒歩旅行第5章 旧道旧線を辿る徒歩旅行第6章 街を漂う徒歩旅行第7章 不思議を探る徒歩旅行第8章 水辺に沿って徒歩旅行第9章 島へ渡る徒歩旅行第10章 唯一の「村」の徒歩旅行あとがき探訪地マップ",
      affiliateUrl: "path",
      imageUrl:
        "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0851/9784635510851_1_3.jpg?_ex=200x200",
    },
  ];

  return (
    <>
      <Nav />
      <Header />
      <Container>
        <VStack>
          <For each={items}>
            {(item, index) => (
              <Card.Root variant="subtle" maxW="4xl" key={index} bg="blue.1/1">
                <Card.Body gap={2}>
                  <Flex gap={8}>
                    <Image
                      rounded="lg"
                      height="200px"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                    <Stack>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Description>{item.author}</Card.Description>
                      <Card.Description>{item.publisherName}</Card.Description>
                      <Card.Description lineClamp={3}>
                        {item.itemCaption}
                      </Card.Description>
                      <Button variant="subtle" bg="#bf0000" color="#ffffff">
                        <SiRakuten />
                        楽天ブックス
                      </Button>
                    </Stack>
                  </Flex>
                  <Text>関連するnoteブログ</Text>
                  <List.Root>
                    <List.Item>
                      <Link href="#">
                        【旅日記】冬の名古屋　日帰り旅行
                        <LuExternalLink />
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#">
                        乳幼児を連れた長距離移動の注意点【帰省・旅行前必見】
                        <LuExternalLink />
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#">
                        🚄【京都１日目】修学旅行
                        <LuExternalLink />
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#">
                        「テーマ」を持って世界を旅行する人々ーー観光は点から線へ
                        <LuExternalLink />
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#">
                        文学フリマ東京にて『日本最古の旅行記を27人で分けて読む』を発売します
                        <LuExternalLink />
                      </Link>
                    </List.Item>
                  </List.Root>
                </Card.Body>
                <Card.Footer></Card.Footer>
              </Card.Root>
            )}
          </For>
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
