import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { getCustomRepositoryToken, getRepositoryToken } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { EntityManager, Repository } from 'typeorm';

describe('ItemsService', () => {
  let service: ItemsService;
  let itemsRepository: Repository<Item>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        { 
          provide: getRepositoryToken(Item), 
          useValue: {
            find: jest.fn()
          }     
        },
        {
          provide: EntityManager, 
          useValue: {}
        }
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    itemsRepository = module.get<Repository<Item>>(getCustomRepositoryToken(Item))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('findAll', async () => {
    await service.findAll()
    expect(itemsRepository.find).toHaveBeenCalled()
  })
});
