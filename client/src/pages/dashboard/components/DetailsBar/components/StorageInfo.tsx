import { Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const StorageInfo = (props: Props) => {
  return (
    <div>
      <Flex direction="column">
        <FileType
          typeName="Images"
          imgSrc="/pictures.png"
          filesCount={17}
          size="0.1GB"
        />
        <FileType
          typeName="Documents"
          filesCount={124}
          size="0.3GB"
          imgSrc="/document.png"
        />
        <FileType
          typeName="Media"
          filesCount={12}
          size="0.1GB"
          imgSrc="/videoFolder.png"
        />
        <FileType
          typeName="Others"
          filesCount={2}
          size="0.1GB"
          imgSrc="/server.png"
        />
      </Flex>
    </div>
  );
};

export default StorageInfo;

interface FileTypeProps {
  typeName: string;
  filesCount: number;
  size: string;
  imgSrc: string;
}

const FileType = (props: FileTypeProps) => {
  return (
    <div>
      <Flex
        marginRight="2rem"
        rounded="lg"
        paddingTop="1rem"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex>
          <Flex
            width="3rem"
            height="3rem"
            bgColor="gray.100"
            rounded="2xl"
            verticalAlign="center"
            marginRight="1rem"
          >
            <Img
              src={props.imgSrc}
              height="2rem"
              width="2rem"
              margin="auto"
            ></Img>
          </Flex>
          <Flex direction="column">
            <Text fontSize="xl">{props.typeName}</Text>
            <Text fontSize="lg" fontWeight="normal" textColor="gray.400">
              {props.filesCount}
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Text fontSize="lg" fontWeight="semibold" textColor="blue.400">
            {props.size}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};
