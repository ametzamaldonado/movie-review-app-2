\c reviews_dev

INSERT INTO authorDetails ( name, username, avatar_path, rating ) VALUES 
(null, 'Ardertsoma', 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light', 5),
(null, 'urnymplact', 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue02&eyeType=Close&eyebrowType=FlatNatural&mouthType=Sad&skinColor=Black', null);

INSERT INTO reviews ( author, content, created_at, authorDetails_id ) VALUES 
('Ardertsoma', 'It was amazing. Really life changing!', '2021-01-20', 1),
('urnymplact', 'cool stuff!', '2022-03-04', 2);